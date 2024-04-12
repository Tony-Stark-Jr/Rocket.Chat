import type { RocketChatRecordDeleted } from '@rocket.chat/core-typings';
import type {
	IAnalyticsModel,
	IAvatarsModel,
	IBannersDismissModel,
	IBannersModel,
	ICannedResponseModel,
	ICredentialTokensModel,
	ICustomSoundsModel,
	ICustomUserStatusModel,
	IEmailInboxModel,
	IEmailMessageHistoryModel,
	IEmojiCustomModel,
	IExportOperationsModel,
	IFederationKeysModel,
	IFederationServersModel,
	IInstanceStatusModel,
	IIntegrationHistoryModel,
	IIntegrationsModel,
	IInvitesModel,
	IImportDataModel,
	ILivechatAgentActivityModel,
	ILivechatBusinessHoursModel,
	ILivechatCustomFieldModel,
	ILivechatDepartmentAgentsModel,
	ILivechatDepartmentModel,
	ILivechatInquiryModel,
	ILivechatPriorityModel,
	ILivechatRoomsModel,
	ILivechatTagModel,
	ILivechatTriggerModel,
	ILivechatUnitModel,
	ILivechatUnitMonitorsModel,
	ILivechatVisitorsModel,
	ILoginServiceConfigurationModel,
	IMessagesModel,
	INotificationQueueModel,
	INpsModel,
	INpsVoteModel,
	IOAuthAppsModel,
	IOAuthAuthCodesModel,
	IOAuthAccessTokensModel,
	IOAuthRefreshTokensModel,
	IOEmbedCacheModel,
	IPbxEventsModel,
	IPushTokenModel,
	IPermissionsModel,
	IReadReceiptsModel,
	IMessageReadsModel,
	IReportsModel,
	IRolesModel,
	IRoomsModel,
	IServerEventsModel,
	ISessionsModel,
	ISettingsModel,
	ISmarshHistoryModel,
	IStatisticsModel,
	ISubscriptionsModel,
	ITeamMemberModel,
	ITeamModel,
	IUploadsModel,
	IUserDataFilesModel,
	IUsersSessionsModel,
	IUsersModel,
	IVideoConferenceModel,
	IVoipRoomModel,
	IWebdavAccountsModel,
	IMatrixBridgedRoomModel,
	IMatrixBridgedUserModel,
	ICalendarEventModel,
	IOmnichannelServiceLevelAgreementsModel,
	IAppsModel,
	IAppsPersistenceModel,
	IAppLogsModel,
	IImportsModel,
	IFederationRoomEventsModel,
	IAppsTokensModel,
	IAuditLogModel,
	ICronHistoryModel,
	IMigrationsModel,
	IModerationReportsModel,
} from '@rocket.chat/model-typings';
import type { Db, Collection } from 'mongodb';

import { EmailInboxRaw } from './models/EmailInbox';
import { InstanceStatusRaw } from './models/InstanceStatus';
import { IntegrationHistoryRaw } from './models/IntegrationHistory';
import { IntegrationsRaw } from './models/Integrations';
import { LivechatDepartmentAgentsRaw } from './models/LivechatDepartmentAgents';
import { LivechatInquiryRaw } from './models/LivechatInquiry';
import { LivechatRoomsRaw } from './models/LivechatRooms';
import { LivechatVisitorsRaw } from './models/LivechatVisitors';
import { LoginServiceConfigurationRaw } from './models/LoginServiceConfiguration';
import { MessagesRaw } from './models/Messages';
import { PbxEventsRaw } from './models/PbxEvents';
import { PermissionsRaw } from './models/Permissions';
import { RolesRaw } from './models/Roles';
import { RoomsRaw } from './models/Rooms';
import { SettingsRaw } from './models/Settings';
import { SubscriptionsRaw } from './models/Subscriptions';
import { TeamRaw } from './models/Team';
import { TeamMemberRaw } from './models/TeamMember';
import { UploadsRaw } from './models/Uploads';
import { UsersRaw } from './models/Users';
import { UsersSessionsRaw } from './models/UsersSessions';
import { proxify } from './proxify';

const prefix = 'rocketchat_';
export function getCollectionName(name: string): string {
	return `${prefix}${name}`;
}

export { registerModel } from './proxify';

export const Apps = proxify<IAppsModel>('IAppsModel');
export const AppsTokens = proxify<IAppsTokensModel>('IAppsTokensModel');
export const AppsPersistence = proxify<IAppsPersistenceModel>('IAppsPersistenceModel');
export const AppLogs = proxify<IAppLogsModel>('IAppLogsModel');
export const Analytics = proxify<IAnalyticsModel>('IAnalyticsModel');
export const Avatars = proxify<IAvatarsModel>('IAvatarsModel');
export const BannersDismiss = proxify<IBannersDismissModel>('IBannersDismissModel');
export const Banners = proxify<IBannersModel>('IBannersModel');
export const CannedResponse = proxify<ICannedResponseModel>('ICannedResponseModel');
export const CredentialTokens = proxify<ICredentialTokensModel>('ICredentialTokensModel');
export const CustomSounds = proxify<ICustomSoundsModel>('ICustomSoundsModel');
export const CustomUserStatus = proxify<ICustomUserStatusModel>('ICustomUserStatusModel');
export const EmailInbox = proxify<IEmailInboxModel>('IEmailInboxModel');
export const EmailMessageHistory = proxify<IEmailMessageHistoryModel>('IEmailMessageHistoryModel');
export const EmojiCustom = proxify<IEmojiCustomModel>('IEmojiCustomModel');
export const ExportOperations = proxify<IExportOperationsModel>('IExportOperationsModel');
export const FederationServers = proxify<IFederationServersModel>('IFederationServersModel');
export const FederationKeys = proxify<IFederationKeysModel>('IFederationKeysModel');
export const FederationRoomEvents = proxify<IFederationRoomEventsModel>('IFederationRoomEventsModel');
export const ImportData = proxify<IImportDataModel>('IImportDataModel');
export const Imports = proxify<IImportsModel>('IImportsModel');
export const InstanceStatus = proxify<IInstanceStatusModel>('IInstanceStatusModel');
export const IntegrationHistory = proxify<IIntegrationHistoryModel>('IIntegrationHistoryModel');
export const Integrations = proxify<IIntegrationsModel>('IIntegrationsModel');
export const Invites = proxify<IInvitesModel>('IInvitesModel');
export const LivechatAgentActivity = proxify<ILivechatAgentActivityModel>('ILivechatAgentActivityModel');
export const LivechatBusinessHours = proxify<ILivechatBusinessHoursModel>('ILivechatBusinessHoursModel');
export const LivechatCustomField = proxify<ILivechatCustomFieldModel>('ILivechatCustomFieldModel');
export const LivechatDepartmentAgents = proxify<ILivechatDepartmentAgentsModel>('ILivechatDepartmentAgentsModel');
export const LivechatDepartment = proxify<ILivechatDepartmentModel>('ILivechatDepartmentModel');
export const LivechatInquiry = proxify<ILivechatInquiryModel>('ILivechatInquiryModel');
export const LivechatPriority = proxify<ILivechatPriorityModel>('ILivechatPriorityModel');
export const LivechatRooms = proxify<ILivechatRoomsModel>('ILivechatRoomsModel');
export const LivechatTag = proxify<ILivechatTagModel>('ILivechatTagModel');
export const LivechatTrigger = proxify<ILivechatTriggerModel>('ILivechatTriggerModel');
export const LivechatVisitors = proxify<ILivechatVisitorsModel>('ILivechatVisitorsModel');
export const LivechatUnit = proxify<ILivechatUnitModel>('ILivechatUnitModel');
export const LivechatUnitMonitors = proxify<ILivechatUnitMonitorsModel>('ILivechatUnitMonitorsModel');
export const LoginServiceConfiguration = proxify<ILoginServiceConfigurationModel>('ILoginServiceConfigurationModel');
export const Messages = proxify<IMessagesModel>('IMessagesModel');
export const NotificationQueue = proxify<INotificationQueueModel>('INotificationQueueModel');
export const Nps = proxify<INpsModel>('INpsModel');
export const NpsVote = proxify<INpsVoteModel>('INpsVoteModel');
export const OAuthApps = proxify<IOAuthAppsModel>('IOAuthAppsModel');
export const OAuthAuthCodes = proxify<IOAuthAuthCodesModel>('IOAuthAuthCodesModel');
export const OAuthAccessTokens = proxify<IOAuthAccessTokensModel>('IOAuthAccessTokensModel');
export const OAuthRefreshTokens = proxify<IOAuthRefreshTokensModel>('IOAuthRefreshTokensModel');
export const OEmbedCache = proxify<IOEmbedCacheModel>('IOEmbedCacheModel');
export const PbxEvents = proxify<IPbxEventsModel>('IPbxEventsModel');
export const PushToken = proxify<IPushTokenModel>('IPushTokenModel');
export const Permissions = proxify<IPermissionsModel>('IPermissionsModel');
export const ReadReceipts = proxify<IReadReceiptsModel>('IReadReceiptsModel');
export const MessageReads = proxify<IMessageReadsModel>('IMessageReadsModel');
export const Reports = proxify<IReportsModel>('IReportsModel');
export const Roles = proxify<IRolesModel>('IRolesModel');
export const Rooms = proxify<IRoomsModel>('IRoomsModel');
export const ServerEvents = proxify<IServerEventsModel>('IServerEventsModel');
export const Sessions = proxify<ISessionsModel>('ISessionsModel');
export const Settings = proxify<ISettingsModel>('ISettingsModel');
export const SmarshHistory = proxify<ISmarshHistoryModel>('ISmarshHistoryModel');
export const Statistics = proxify<IStatisticsModel>('IStatisticsModel');
export const Subscriptions = proxify<ISubscriptionsModel>('ISubscriptionsModel');
export const TeamMember = proxify<ITeamMemberModel>('ITeamMemberModel');
export const Team = proxify<ITeamModel>('ITeamModel');
export const Users = proxify<IUsersModel>('IUsersModel');
export const Uploads = proxify<IUploadsModel>('IUploadsModel');
export const UserDataFiles = proxify<IUserDataFilesModel>('IUserDataFilesModel');

export const UsersSessions = proxify<IUsersSessionsModel>('IUsersSessionsModel');
export const VideoConference = proxify<IVideoConferenceModel>('IVideoConferenceModel');
export const VoipRoom = proxify<IVoipRoomModel>('IVoipRoomModel');
export const WebdavAccounts = proxify<IWebdavAccountsModel>('IWebdavAccountsModel');
export const MatrixBridgedRoom = proxify<IMatrixBridgedRoomModel>('IMatrixBridgedRoomModel');
export const MatrixBridgedUser = proxify<IMatrixBridgedUserModel>('IMatrixBridgedUserModel');
export const CalendarEvent = proxify<ICalendarEventModel>('ICalendarEventModel');
export const OmnichannelServiceLevelAgreements = proxify<IOmnichannelServiceLevelAgreementsModel>(
	'IOmnichannelServiceLevelAgreementsModel',
);
export const AuditLog = proxify<IAuditLogModel>('IAuditLogModel');
export const CronHistory = proxify<ICronHistoryModel>('ICronHistoryModel');
export const Migrations = proxify<IMigrationsModel>('IMigrationsModel');
export const ModerationReports = proxify<IModerationReportsModel>('IModerationReportsModel');

export const db = proxify<Db>('Db');

export const trash = proxify<Collection<RocketChatRecordDeleted<any>>>('Collection<RocketChatRecordDeleted<any>');

Roles.register(() => new RolesRaw());
Rooms.register(() => new RoomsRaw());
Team.register(() => new TeamRaw());
TeamMember.register(() => new TeamMemberRaw());

Users.register(() => new UsersRaw() as any);
Messages.register(() => new MessagesRaw());
UsersSessions.register(() => new UsersSessionsRaw());

Permissions.register(() => new PermissionsRaw());

LoginServiceConfiguration.register(() => new LoginServiceConfigurationRaw());

InstanceStatus.register(() => new InstanceStatusRaw());

IntegrationHistory.register(() => new IntegrationHistoryRaw());

Integrations.register(() => new IntegrationsRaw());

EmailInbox.register(() => new EmailInboxRaw());

LivechatPriority.register(() => new LivechatPriorityRaw());
LivechatRooms.register(() => new LivechatRoomsRaw());
LivechatVisitors.register(() => new LivechatVisitorsRaw());

Uploads.register(() => new UploadsRaw());

PbxEvents.register(() => new PbxEventsRaw());

Settings.register(() => new SettingsRaw());
Subscriptions.register(() => new SubscriptionsRaw());
LivechatInquiry.register(() => new LivechatInquiryRaw());
LivechatDepartmentAgents.register(() => new LivechatDepartmentAgentsRaw());
