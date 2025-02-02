---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/socionext/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config NET_VENDOR_SOCIONEXT
	bool "Socionext ethernet drivers"
	default y
	help
	  Option to select ethernet drivers for Socionext platforms.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about Socionext devices. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_SOCIONEXT

config SNI_AVE
	tristate "Socionext AVE ethernet support"
	depends on (ARCH_UNIPHIER || COMPILE_TEST) && OF
	depends on HAS_IOMEM
	select MFD_SYSCON
	select PHYLIB
	help
	  Driver for gigabit ethernet MACs, called AVE, in the
	  Socionext UniPhier family.

config SNI_NETSEC
	tristate "Socionext NETSEC ethernet support"
	depends on (ARCH_SYNQUACER || COMPILE_TEST) && OF
	select PHYLIB
	select PAGE_POOL
	select MII
	help
	  Enable to add support for the SocioNext NetSec Gigabit Ethernet
	  controller + PHY, as found on the Synquacer SC2A11 SoC

	  To compile this driver as a module, choose M here: the module will be
	  called netsec.  If unsure, say N.

endif #NET_VENDOR_SOCIONEXT

```
