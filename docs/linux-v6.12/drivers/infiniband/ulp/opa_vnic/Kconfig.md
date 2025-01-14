---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/ulp/opa_vnic/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config INFINIBAND_OPA_VNIC
	tristate "Cornelis OPX VNIC support"
	depends on X86_64 && INFINIBAND
	help
	This is Omni-Path Express (OPX) Virtual Network Interface Controller (VNIC)
	driver for Ethernet over Omni-Path feature. It implements the HW
	independent VNIC functionality. It interfaces with Linux stack for
	data path and IB MAD for the control path.

```
