---
sidebar_position: 96
---
# max732x.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/max732x.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef __LINUX_I2C_MAX732X_H
#define __LINUX_I2C_MAX732X_H

/* platform data for the MAX732x 8/16-bit I/O expander driver */

struct max732x_platform_data {
	/* number of the first GPIO */
	unsigned	gpio_base;
};
#endif /* __LINUX_I2C_MAX732X_H */

```
