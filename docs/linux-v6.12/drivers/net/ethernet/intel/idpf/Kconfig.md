---
sidebar_position: 21
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/net/ethernet/intel/idpf/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
# Copyright (C) 2024 Intel Corporation

config IDPF
	tristate "Intel(R) Infrastructure Data Path Function Support"
	depends on PCI_MSI
	select DIMLIB
	select LIBETH
	help
	  This driver supports Intel(R) Infrastructure Data Path Function
	  devices.

	  To compile this driver as a module, choose M here. The module
	  will be called idpf.

if IDPF

config IDPF_SINGLEQ
	bool "idpf singleq support"
	help
	  This option enables support for legacy single Rx/Tx queues w/no
	  completion and fill queues. Only enable if you have hardware which
	  wants to work in this mode as it increases the driver size and adds
	  runtme checks on hotpath.

endif # IDPF

```
