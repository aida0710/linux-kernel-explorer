---
sidebar_position: 56
---
# gpio_backlight.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/gpio_backlight.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * gpio_backlight.h - Simple GPIO-controlled backlight
 */
#ifndef __GPIO_BACKLIGHT_H__
#define __GPIO_BACKLIGHT_H__

struct device;

struct gpio_backlight_platform_data {
	struct device *dev;
};

#endif

```
