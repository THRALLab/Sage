export const { DB_CONNECTION } = process.env;
export const { BOT_NAME } = process.env;
export const { BOT_TOKEN } = process.env;
export const { BOT_CLIENT_ID } = process.env;
export const { DB_USERS } = process.env;
export const { DB_PVQ } = process.env;
export const { DB_QTAGS } = process.env;
export const { DB_ASSIGNABLE } = process.env;
export const { DB_COURSES } = process.env;
export const { DB_REMINDERS } = process.env;
export const { DB_CLIENT_DATA } = process.env;
export const { DB_POLLS } = process.env;
export const { GUILD_MAIN } = process.env;
export const { GUILD_GATEWAY } = process.env;
export const { GUILD_GATEWAY_INVITE } = process.env;
export const { ROLE_ADMIN } = process.env;
export const { ROLE_STUDENT_ADMIN } = process.env;
export const { ROLE_STAFF } = process.env;
export const { ROLE_VERIFIED } = process.env;
export const { ROLE_MUTED } = process.env;
export const { ROLE_LEVEL_ONE } = process.env;
export const { EMAIL_SENDER } = process.env;
export const { EMAIL_REPLY_TO } = process.env;
export const { EMAIL_REPORT_ADDRESSES } = process.env;
export const { CHANNEL_ERROR_LOG } = process.env;
export const { CHANNEL_SERVER_LOG } = process.env;
export const { CHANNEL_MEMBER_LOG } = process.env;
export const { CHANNEL_MOD_LOG } = process.env;
export const { CHANNEL_FEEDBACK } = process.env;
export const { CHANNEL_SAGE } = process.env;
export const { CHANNEL_ANNOUNCEMENTS } = process.env;
export const { CHANNEL_ARCHIVE } = process.env;
export const { CHANNEL_ROLE_SELECT } = process.env;
export const { ROLE_DROPDOWNS_COURSE_ROLES } = process.env;
export const { ROLE_DROPDOWNS_ASSIGN_ROLES } = process.env;

export const BOT = {
	TOKEN: BOT_TOKEN,
	CLIENT_ID: BOT_CLIENT_ID,
	NAME: BOT_NAME
};

export const MONGO = process.env;

export const DB = {
	CONNECTION: DB_CONNECTION,
	USERS: DB_USERS,
	PVQ: DB_PVQ,
	QTAGS: DB_QTAGS,
	ASSIGNABLE: DB_ASSIGNABLE,
	COURSES: DB_COURSES,
	REMINDERS: DB_REMINDERS,
	CLIENT_DATA: DB_CLIENT_DATA,
	POLLS: DB_POLLS
};

export const GUILDS = {
	MAIN: GUILD_MAIN,
	GATEWAY: GUILD_GATEWAY,
	GATEWAY_INVITE: GUILD_GATEWAY_INVITE
};

export const ROLES = {
	ADMIN: ROLE_ADMIN,
	STUDENT_ADMIN: ROLE_STUDENT_ADMIN,
	STAFF: ROLE_STAFF,
	VERIFIED: ROLE_VERIFIED,
	MUTED: ROLE_MUTED,
	LEVEL_ONE: ROLE_LEVEL_ONE
};

export const EMAIL = {
	SENDER: EMAIL_SENDER,
	REPLY_TO: EMAIL_REPLY_TO,
	REPORT_ADDRESSES: EMAIL_REPORT_ADDRESSES
};

export const CHANNELS = {
	ERROR_LOG: CHANNEL_ERROR_LOG,
	SERVER_LOG: CHANNEL_SERVER_LOG,
	MEMBER_LOG: CHANNEL_MEMBER_LOG,
	MOD_LOG: CHANNEL_MOD_LOG,
	FEEDBACK: CHANNEL_FEEDBACK,
	SAGE: CHANNEL_SAGE,
	ANNOUNCEMENTS: CHANNEL_ANNOUNCEMENTS,
	ARCHIVE: CHANNEL_ARCHIVE,
	ROLE_SELECT: CHANNEL_ROLE_SELECT
};

export const ROLE_DROPDOWNS = {
	COURSE_ROLES: ROLE_DROPDOWNS_COURSE_ROLES,
	ASSIGN_ROLES: ROLE_DROPDOWNS_ASSIGN_ROLES
};

export const LEVEL_TIER_ROLES = process.env;

export const FIRST_LEVEL = process.env;
export const ENV_GITHUB_TOKEN = process.env;
export const ENV_GITHUB_PROJECT = process.env;
export const PREFIX = process.env;
export const MAINTAINERS = process.env;
export const SEMESTER_ID = process.env;
export const BLACKLIST = process.env;
