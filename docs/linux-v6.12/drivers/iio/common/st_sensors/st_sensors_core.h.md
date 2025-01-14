---
sidebar_position: 5
---
# st_sensors_core.h

### ファイル情報

- パス: `linux-v6.12/drivers/iio/common/st_sensors/st_sensors_core.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Local functions in the ST Sensors core
 */
#ifndef __ST_SENSORS_CORE_H
#define __ST_SENSORS_CORE_H
struct iio_dev;
int st_sensors_write_data_with_mask(struct iio_dev *indio_dev,
				    u8 reg_addr, u8 mask, u8 data);
#endif

```
