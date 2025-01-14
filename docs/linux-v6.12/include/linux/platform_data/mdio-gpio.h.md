---
sidebar_position: 100
---
# mdio-gpio.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/mdio-gpio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * MDIO-GPIO bus platform data structure
 */

#ifndef __LINUX_MDIO_GPIO_PDATA_H
#define __LINUX_MDIO_GPIO_PDATA_H

struct mdio_gpio_platform_data {
	u32 phy_mask;
	u32 phy_ignore_ta_mask;
};

#endif /* __LINUX_MDIO_GPIO_PDATA_H */

```
