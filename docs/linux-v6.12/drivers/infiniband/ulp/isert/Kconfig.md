---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/ulp/isert/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config INFINIBAND_ISERT
	tristate "iSCSI Extensions for RDMA (iSER) target support"
	depends on INET && INFINIBAND_ADDR_TRANS && TARGET_CORE && ISCSI_TARGET
	help
	Support for iSCSI Extensions for RDMA (iSER) Target on Infiniband fabrics.

```
