---
sidebar_position: 21
---
# physmap-gemini.h

### ファイル情報

- パス: `linux-v6.12/drivers/mtd/maps/physmap-gemini.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#include <linux/of.h>
#include <linux/mtd/map.h>

#ifdef CONFIG_MTD_PHYSMAP_GEMINI
int of_flash_probe_gemini(struct platform_device *pdev,
			  struct device_node *np,
			  struct map_info *map);
#else
static inline
int of_flash_probe_gemini(struct platform_device *pdev,
			  struct device_node *np,
			  struct map_info *map)
{
	return 0;
}
#endif

```
