---
sidebar_position: 59
---
# adf_heartbeat_dbgfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_common/adf_heartbeat_dbgfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/* Copyright(c) 2023 Intel Corporation */

#ifndef ADF_HEARTBEAT_DBGFS_H_
#define ADF_HEARTBEAT_DBGFS_H_

struct adf_accel_dev;

void adf_heartbeat_dbgfs_add(struct adf_accel_dev *accel_dev);
void adf_heartbeat_dbgfs_rm(struct adf_accel_dev *accel_dev);

#endif /* ADF_HEARTBEAT_DBGFS_H_ */

```
