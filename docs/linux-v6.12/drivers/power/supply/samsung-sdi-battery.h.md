---
sidebar_position: 104
---
# samsung-sdi-battery.h

### ファイル情報

- パス: `linux-v6.12/drivers/power/supply/samsung-sdi-battery.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#if IS_ENABLED(CONFIG_BATTERY_SAMSUNG_SDI)
extern int samsung_sdi_battery_get_info(struct device *dev,
				const char *compatible,
				struct power_supply_battery_info **info);
#else
static inline int samsung_sdi_battery_get_info(struct device *dev,
				const char *compatible,
				struct power_supply_battery_info **info)
{
	return -ENODEV;
}
#endif

```
