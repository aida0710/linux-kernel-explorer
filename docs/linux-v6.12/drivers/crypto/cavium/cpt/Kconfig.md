---
sidebar_position: 12
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/crypto/cavium/cpt/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Cavium crypto device configuration
#

config CRYPTO_DEV_CPT
	tristate

config CAVIUM_CPT
	tristate "Cavium Cryptographic Accelerator driver"
	depends on ARCH_THUNDER || COMPILE_TEST
	depends on PCI_MSI && 64BIT
	select CRYPTO_DEV_CPT
	help
	  Support for Cavium CPT block found in octeon-tx series of
	  processors.

	  To compile this as a module, choose M here.

```
