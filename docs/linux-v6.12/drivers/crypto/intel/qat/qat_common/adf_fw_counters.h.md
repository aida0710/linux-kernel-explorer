---
sidebar_position: 24
---
# adf_fw_counters.h

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_common/adf_fw_counters.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/* Copyright(c) 2023 Intel Corporation */
#ifndef ADF_FW_COUNTERS_H
#define ADF_FW_COUNTERS_H

struct adf_accel_dev;

void adf_fw_counters_dbgfs_add(struct adf_accel_dev *accel_dev);
void adf_fw_counters_dbgfs_rm(struct adf_accel_dev *accel_dev);

#endif

```
