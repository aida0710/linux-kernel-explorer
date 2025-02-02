---
sidebar_position: 4
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/i825xx/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Intel 82596/82593/82596 network device configuration
#

config NET_VENDOR_I825XX
	bool "Intel (82586/82593/82596) devices"
	default y
	depends on NET_VENDOR_INTEL
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question does not directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about these devices. If you say Y, you will be asked for
	  your specific card in the following questions.

if NET_VENDOR_I825XX

config ARM_ETHER1
	tristate "Acorn Ether1 support"
	depends on ARM && ARCH_ACORN
	help
	  If you have an Acorn system with one of these (AKA25) network cards,
	  you should say Y to this option if you wish to use it with Linux.

config BVME6000_NET
	tristate "BVME6000 Ethernet support"
	depends on BVME6000
	help
	  This is the driver for the Ethernet interface on BVME4000 and
	  BVME6000 VME boards.  Say Y here to include the driver for this chip
	  in your kernel.
	  To compile this driver as a module, choose M here.

config LASI_82596
	tristate "Lasi ethernet"
	depends on GSC
	help
	  Say Y here to support the builtin Intel 82596 ethernet controller
	  found in Hewlett-Packard PA-RISC machines with 10Mbit ethernet.

config MVME16x_NET
	tristate "MVME16x Ethernet support"
	depends on MVME16x
	help
	  This is the driver for the Ethernet interface on the Motorola
	  MVME162, 166, 167, 172 and 177 boards.  Say Y here to include the
	  driver for this chip in your kernel.
	  To compile this driver as a module, choose M here.

config SNI_82596
	tristate "SNI RM ethernet"
	depends on SNI_RM
	help
	  Say Y here to support the on-board Intel 82596 ethernet controller
	  built into SNI RM machines.

config SUN3_82586
	bool "Sun3 on-board Intel 82586 support"
	depends on SUN3
	help
	  This driver enables support for the on-board Intel 82586 based
	  Ethernet adapter found on Sun 3/1xx and 3/2xx motherboards.  Note
	  that this driver does not support 82586-based adapters on additional
	  VME boards.

endif # NET_VENDOR_I825XX

```
