---
sidebar_position: 7
---
# mt8192-afe-gpio.h

### ファイル情報

- パス: `linux-v6.12/sound/soc/mediatek/mt8192/mt8192-afe-gpio.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * mt8192-afe-gpio.h  --  Mediatek 8192 afe gpio ctrl definition
 *
 * Copyright (c) 2020 MediaTek Inc.
 * Author: Shane Chien <shane.chien@mediatek.com>
 */

#ifndef _MT8192_AFE_GPIO_H_
#define _MT8192_AFE_GPIO_H_

struct device;

int mt8192_afe_gpio_init(struct device *dev);

int mt8192_afe_gpio_request(struct device *dev, bool enable,
			    int dai, int uplink);

#endif

```
