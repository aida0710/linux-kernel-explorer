---
sidebar_position: 3
---
# bq24190_charger.h

### ファイル情報

- パス: `linux-v6.12/include/linux/power/bq24190_charger.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Platform data for the TI bq24190 battery charger driver.
 */

#ifndef _BQ24190_CHARGER_H_
#define _BQ24190_CHARGER_H_

#include <linux/regulator/machine.h>

struct bq24190_platform_data {
	const struct regulator_init_data *regulator_init_data;
};

#endif

```
