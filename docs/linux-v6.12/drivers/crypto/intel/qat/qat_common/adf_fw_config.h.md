---
sidebar_position: 22
---
# adf_fw_config.h

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/intel/qat/qat_common/adf_fw_config.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/* Copyright(c) 2023 Intel Corporation */
#ifndef ADF_FW_CONFIG_H_
#define ADF_FW_CONFIG_H_

enum adf_fw_objs {
	ADF_FW_SYM_OBJ,
	ADF_FW_ASYM_OBJ,
	ADF_FW_DC_OBJ,
	ADF_FW_ADMIN_OBJ,
};

struct adf_fw_config {
	u32 ae_mask;
	enum adf_fw_objs obj;
};

#endif

```
