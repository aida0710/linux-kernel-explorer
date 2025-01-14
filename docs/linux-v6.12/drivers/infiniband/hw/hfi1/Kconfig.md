---
sidebar_position: 33
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/infiniband/hw/hfi1/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config INFINIBAND_HFI1
	tristate "Cornelis OPX Gen1 support"
	depends on X86_64 && INFINIBAND_RDMAVT && I2C && !UML
	select MMU_NOTIFIER
	select CRC32
	select I2C_ALGOBIT
	help
	This is a low-level driver for Cornelis OPX Gen1 adapter.
config HFI1_DEBUG_SDMA_ORDER
	bool "HFI1 SDMA Order debug"
	depends on INFINIBAND_HFI1
	default n
	help
	This is a debug flag to test for out of order
	sdma completions for unit testing
config SDMA_VERBOSITY
	bool "Config SDMA Verbosity"
	depends on INFINIBAND_HFI1
	default n
	help
	This is a configuration flag to enable verbose
	SDMA debug

```
