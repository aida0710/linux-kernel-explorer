---
sidebar_position: 14
---
# adf_clock.h

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_common/adf_clock.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/* Copyright(c) 2023 Intel Corporation */
#ifndef ADF_CLOCK_H
#define ADF_CLOCK_H

#include <linux/types.h>

struct adf_accel_dev;

int adf_dev_measure_clock(struct adf_accel_dev *accel_dev, u32 *frequency,
			  u32 min, u32 max);
u64 adf_clock_get_current_time(void);

#endif

```
