---
sidebar_position: 20
---
# bnxt_nvm_defs.h

### ファイル情報

- パス: `drivers/net/ethernet/broadcom/bnxt/bnxt_nvm_defs.h`

### コンテンツ

```h
/* Broadcom NetXtreme-C/E network driver.
 *
 * Copyright (c) 2014-2016 Broadcom Corporation
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation.
 */

#ifndef _BNXT_NVM_DEFS_H_
#define _BNXT_NVM_DEFS_H_

enum bnxt_nvm_directory_type {
	BNX_DIR_TYPE_UNUSED = 0,
	BNX_DIR_TYPE_PKG_LOG = 1,
	BNX_DIR_TYPE_UPDATE = 2,
	BNX_DIR_TYPE_CHIMP_PATCH = 3,
	BNX_DIR_TYPE_BOOTCODE = 4,
	BNX_DIR_TYPE_VPD = 5,
	BNX_DIR_TYPE_EXP_ROM_MBA = 6,
	BNX_DIR_TYPE_AVS = 7,
	BNX_DIR_TYPE_PCIE = 8,
	BNX_DIR_TYPE_PORT_MACRO = 9,
	BNX_DIR_TYPE_APE_FW = 10,
	BNX_DIR_TYPE_APE_PATCH = 11,
	BNX_DIR_TYPE_KONG_FW = 12,
	BNX_DIR_TYPE_KONG_PATCH = 13,
	BNX_DIR_TYPE_BONO_FW = 14,
	BNX_DIR_TYPE_BONO_PATCH = 15,
	BNX_DIR_TYPE_TANG_FW = 16,
	BNX_DIR_TYPE_TANG_PATCH = 17,
	BNX_DIR_TYPE_BOOTCODE_2 = 18,
	BNX_DIR_TYPE_CCM = 19,
	BNX_DIR_TYPE_PCI_CFG = 20,
	BNX_DIR_TYPE_TSCF_UCODE = 21,
	BNX_DIR_TYPE_ISCSI_BOOT = 22,
	BNX_DIR_TYPE_ISCSI_BOOT_IPV6 = 24,
	BNX_DIR_TYPE_ISCSI_BOOT_IPV4N6 = 25,
	BNX_DIR_TYPE_ISCSI_BOOT_CFG6 = 26,
	BNX_DIR_TYPE_EXT_PHY = 27,
	BNX_DIR_TYPE_SHARED_CFG = 40,
	BNX_DIR_TYPE_PORT_CFG = 41,
	BNX_DIR_TYPE_FUNC_CFG = 42,
	BNX_DIR_TYPE_MGMT_CFG = 48,
	BNX_DIR_TYPE_MGMT_DATA = 49,
	BNX_DIR_TYPE_MGMT_WEB_DATA = 50,
	BNX_DIR_TYPE_MGMT_WEB_META = 51,
	BNX_DIR_TYPE_MGMT_EVENT_LOG = 52,
	BNX_DIR_TYPE_MGMT_AUDIT_LOG = 53
};

#define BNX_DIR_ORDINAL_FIRST			0

#define BNX_DIR_EXT_NONE			0
#define BNX_DIR_EXT_INACTIVE			(1 << 0)
#define BNX_DIR_EXT_UPDATE			(1 << 1)

#define BNX_DIR_ATTR_NONE			0
#define BNX_DIR_ATTR_NO_CHKSUM			(1 << 0)
#define BNX_DIR_ATTR_PROP_STREAM		(1 << 1)

enum bnxnvm_pkglog_field_index {
	BNX_PKG_LOG_FIELD_IDX_INSTALLED_TIMESTAMP	= 0,
	BNX_PKG_LOG_FIELD_IDX_PKG_DESCRIPTION		= 1,
	BNX_PKG_LOG_FIELD_IDX_PKG_VERSION		= 2,
	BNX_PKG_LOG_FIELD_IDX_PKG_TIMESTAMP		= 3,
	BNX_PKG_LOG_FIELD_IDX_PKG_CHECKSUM		= 4,
	BNX_PKG_LOG_FIELD_IDX_INSTALLED_ITEMS		= 5,
	BNX_PKG_LOG_FIELD_IDX_INSTALLED_MASK		= 6
};

#endif				/* Don't add anything after this line */

```
