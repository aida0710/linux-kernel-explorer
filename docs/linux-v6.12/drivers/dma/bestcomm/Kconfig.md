---
sidebar_position: 10
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/dma/bestcomm/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Kconfig options for Bestcomm
#

config PPC_BESTCOMM
	tristate "Bestcomm DMA engine support"
	depends on PPC_MPC52xx
	default n
	select PPC_LIB_RHEAP
	help
	  BestComm is the name of the communication coprocessor found
	  on the Freescale MPC5200 family of processor.  Its usage is
	  optional for some drivers (like ATA), but required for
	  others (like FEC).

	  If you want to use drivers that require DMA operations,
	  answer Y or M. Otherwise say N.

config PPC_BESTCOMM_ATA
	tristate
	depends on PPC_BESTCOMM
	help
	  This option enables the support for the ATA task.

config PPC_BESTCOMM_FEC
	tristate
	depends on PPC_BESTCOMM
	help
	  This option enables the support for the FEC tasks.

config PPC_BESTCOMM_GEN_BD
	tristate
	depends on PPC_BESTCOMM
	help
	  This option enables the support for the GenBD tasks.


```
