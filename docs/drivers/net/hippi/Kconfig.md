---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/hippi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# HIPPI network device configuration
#

config HIPPI
	bool "HIPPI driver support"
	depends on INET && PCI
	help
	  HIgh Performance Parallel Interface (HIPPI) is a 800Mbit/sec and
	  1600Mbit/sec dual-simplex switched or point-to-point network. HIPPI
	  can run over copper (25m) or fiber (300m on multi-mode or 10km on
	  single-mode). HIPPI networks are commonly used for clusters and to
	  connect to super computers. If you are connected to a HIPPI network
	  and have a HIPPI network card in your computer that you want to use
	  under Linux, say Y here (you must also remember to enable the driver
	  for your HIPPI card below). Most people will say N here.

if HIPPI

config ROADRUNNER
	tristate "Essential RoadRunner HIPPI PCI adapter support"
	depends on PCI
	help
	  Say Y here if this is your PCI HIPPI network card.

	  To compile this driver as a module, choose M here: the module
	  will be called rrunner.  If unsure, say N.

config ROADRUNNER_LARGE_RINGS
	bool "Use large TX/RX rings"
	depends on ROADRUNNER
	help
	  If you say Y here, the RoadRunner driver will preallocate up to 2 MB
	  of additional memory to allow for fastest operation, both for
	  transmitting and receiving. This memory cannot be used by any other
	  kernel code or by user space programs. Say Y here only if you have
	  the memory.

endif # HIPPI

```
