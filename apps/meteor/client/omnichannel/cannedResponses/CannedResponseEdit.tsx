import type { ILivechatDepartment, IOmnichannelCannedResponse, Serialized } from '@rocket.chat/core-typings';
import { Box, Button, ButtonGroup } from '@rocket.chat/fuselage';
import { useUniqueId } from '@rocket.chat/fuselage-hooks';
import { useToastMessageDispatch, useEndpoint, useTranslation, useRouter } from '@rocket.chat/ui-contexts';
import { useQueryClient } from '@tanstack/react-query';
import React, { memo, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Page, PageHeader, PageScrollableContentWithShadow, PageFooter } from '../../components/Page';
import type { CannedResponseFormFields } from './components/CannedResponseForm';
import CannedResponseForm from './components/CannedResponseForm';
import { useRemoveCannedResponse } from './useRemoveCannedResponse';

type CannedResponseEditProps = {
	cannedResponseData?: Serialized<IOmnichannelCannedResponse>;
	departmentData?: Serialized<ILivechatDepartment>;
};

const getInitialData = (cannedResponseData: Serialized<IOmnichannelCannedResponse> | undefined): CannedResponseFormFields => ({
	_id: cannedResponseData?._id || '',
	shortcut: cannedResponseData?.shortcut || '',
	text: cannedResponseData?.text || '',
	tags: cannedResponseData?.tags ?? [],
	scope: cannedResponseData?.scope || 'user',
	departmentId: cannedResponseData?.departmentId || '',
});

const CannedResponseEdit = ({ cannedResponseData }: CannedResponseEditProps) => {
	const t = useTranslation();
	const router = useRouter();
	const dispatchToastMessage = useToastMessageDispatch();
	const queryClient = useQueryClient();

	const saveCannedResponse = useEndpoint('POST', '/v1/canned-responses');

	const form = useForm<CannedResponseFormFields>({ defaultValues: getInitialData(cannedResponseData) });

	const {
		handleSubmit,
		reset,
		formState: { isDirty },
	} = form;

	const handleDelete = useRemoveCannedResponse();

	const handleSave = useCallback(
		async ({ _id, departmentId, ...data }: CannedResponseFormFields) => {
			try {
				await saveCannedResponse({
					_id: cannedResponseData?._id ?? _id,
					...data,
					...(departmentId && { departmentId }),
				});
				dispatchToastMessage({
					type: 'success',
					message: t(cannedResponseData?._id ? 'Canned_Response_Updated' : 'Canned_Response_Created'),
				});
				router.navigate('/omnichannel/canned-responses');
				queryClient.invalidateQueries(['getCannedResponses']);
			} catch (error) {
				dispatchToastMessage({ type: 'error', message: error });
			}
		},
		[cannedResponseData?._id, queryClient, saveCannedResponse, dispatchToastMessage, t, router],
	);
	const formId = useUniqueId();

	return (
		<Page>
			<PageHeader
				title={cannedResponseData?._id ? t('Edit_CannedResponse') : t('New_CannedResponse')}
				onClickBack={() => router.navigate('/omnichannel/canned-responses')}
			>
				{cannedResponseData?._id && (
					<ButtonGroup>
						<Button danger onClick={() => handleDelete(cannedResponseData._id)}>
							{t('Delete')}
						</Button>
					</ButtonGroup>
				)}
			</PageHeader>
			<PageScrollableContentWithShadow>
				<FormProvider {...form}>
					<Box id={formId} onSubmit={handleSubmit(handleSave)} w='full' alignSelf='center' maxWidth='x600' is='form' autoComplete='off'>
						<CannedResponseForm />
					</Box>
				</FormProvider>
			</PageScrollableContentWithShadow>
			<PageFooter isDirty={isDirty}>
				<ButtonGroup>
					<Button onClick={() => reset()}>{t('Cancel')}</Button>
					<Button form={formId} primary type='submit'>
						{t('Save')}
					</Button>
				</ButtonGroup>
			</PageFooter>
		</Page>
	);
};

export default memo(CannedResponseEdit);
