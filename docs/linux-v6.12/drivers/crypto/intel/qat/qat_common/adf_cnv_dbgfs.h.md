---
sidebar_position: 16
---
# adf_cnv_dbgfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_common/adf_cnv_dbgfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/* Copyright(c) 2023 Intel Corporation */
#ifndef ADF_CNV_DBG_H
#define ADF_CNV_DBG_H

struct adf_accel_dev;

void adf_cnv_dbgfs_add(struct adf_accel_dev *accel_dev);
void adf_cnv_dbgfs_rm(struct adf_accel_dev *accel_dev);

#endif

```
