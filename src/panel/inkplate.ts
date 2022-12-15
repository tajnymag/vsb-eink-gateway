export const INKPLATE_WIDTH = 1200;
export const INKPLATE_HEIGHT = 825;

export enum EInkPanelEvent {
	NOOP = 0,
	REBOOT = 1,
	PERFORM_OTA_UPDATE = 8,
	CONFIG_SET_SSID = 9,
	CONFIG_SET_PASSWORD = 10,
	CONFIG_SET_WEBSOCKET_URL = 11,
	DRAW_BITMAP_1BIT = 32,
	DRAW_BITMAP_3BIT = 33,
}