---
sidebar_position: 5
---
# bq25890_charger.h

### ファイル情報

- パス: `linux-v6.12/include/linux/power/bq25890_charger.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Platform data for the TI bq25890 battery charger driver.
 */

#ifndef _BQ25890_CHARGER_H_
#define _BQ25890_CHARGER_H_

struct regulator_init_data;

struct bq25890_platform_data {
	const struct regulator_init_data *regulator_init_data;
};

#endif

```
