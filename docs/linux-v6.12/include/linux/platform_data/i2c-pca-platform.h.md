---
sidebar_position: 69
---
# i2c-pca-platform.h

### ファイル情報

- パス: `linux-v6.12/include/linux/platform_data/i2c-pca-platform.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
#ifndef I2C_PCA9564_PLATFORM_H
#define I2C_PCA9564_PLATFORM_H

struct i2c_pca9564_pf_platform_data {
	int i2c_clock_speed;	/* values are defined in linux/i2c-algo-pca.h */
	int timeout;		/* timeout in jiffies */
};

#endif /* I2C_PCA9564_PLATFORM_H */

```
