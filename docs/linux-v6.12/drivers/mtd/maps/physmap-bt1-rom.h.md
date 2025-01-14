---
sidebar_position: 18
---
# physmap-bt1-rom.h

### ファイル情報

- パス: `linux-v6.12/drivers/mtd/maps/physmap-bt1-rom.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
#include <linux/mtd/map.h>
#include <linux/of.h>

#ifdef CONFIG_MTD_PHYSMAP_BT1_ROM
int of_flash_probe_bt1_rom(struct platform_device *pdev,
			   struct device_node *np,
			   struct map_info *map);
#else
static inline
int of_flash_probe_bt1_rom(struct platform_device *pdev,
			   struct device_node *np,
			   struct map_info *map)
{
	return 0;
}
#endif

```
