---
sidebar_position: 7
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/target/iscsi/cxgbit/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config ISCSI_TARGET_CXGB4
	tristate "Chelsio iSCSI target offload driver"
	depends on ISCSI_TARGET && CHELSIO_T4 && INET
	select CHELSIO_LIB
	help
	To compile this driver as module, choose M here: the module
	will be called cxgbit.

```
