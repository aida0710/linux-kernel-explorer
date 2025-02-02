---
sidebar_position: 5
---
# Kconfig

### ファイル情報

- パス: `drivers/net/fddi/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# FDDI network device configuration
#

config FDDI
	tristate "FDDI driver support"
	depends on PCI || EISA || TC
	help
	  Fiber Distributed Data Interface is a high speed local area network
	  design; essentially a replacement for high speed Ethernet. FDDI can
	  run over copper or fiber. If you are connected to such a network and
	  want a driver for the FDDI card in your computer, say Y here (and
	  then also Y to the driver for your FDDI card, below). Most people
	  will say N.

if FDDI

config DEFZA
	tristate "DEC FDDIcontroller 700/700-C (DEFZA-xx) support"
	depends on FDDI && TC
	help
	  This is support for the DEC FDDIcontroller 700 (DEFZA-AA, fiber)
	  and 700-C (DEFZA-CA, copper) TURBOchannel network cards which
	  can connect you to a local FDDI network.

	  To compile this driver as a module, choose M here: the module
	  will be called defza.  If unsure, say N.

config DEFXX
	tristate "Digital DEFTA/DEFEA/DEFPA adapter support"
	depends on FDDI && (PCI || EISA || TC)
	help
	  This is support for the DIGITAL series of TURBOchannel (DEFTA),
	  EISA (DEFEA) and PCI (DEFPA) controllers which can connect you
	  to a local FDDI network.

	  To compile this driver as a module, choose M here: the module
	  will be called defxx.  If unsure, say N.

config SKFP
	tristate "SysKonnect FDDI PCI support"
	depends on FDDI && PCI
	select BITREVERSE
	help
	  Say Y here if you have a SysKonnect FDDI PCI adapter.
	  The following adapters are supported by this driver:
	  - SK-5521 (SK-NET FDDI-UP)
	  - SK-5522 (SK-NET FDDI-UP DAS)
	  - SK-5541 (SK-NET FDDI-FP)
	  - SK-5543 (SK-NET FDDI-LP)
	  - SK-5544 (SK-NET FDDI-LP DAS)
	  - SK-5821 (SK-NET FDDI-UP64)
	  - SK-5822 (SK-NET FDDI-UP64 DAS)
	  - SK-5841 (SK-NET FDDI-FP64)
	  - SK-5843 (SK-NET FDDI-LP64)
	  - SK-5844 (SK-NET FDDI-LP64 DAS)
	  - Netelligent 100 FDDI DAS Fibre SC
	  - Netelligent 100 FDDI SAS Fibre SC
	  - Netelligent 100 FDDI DAS UTP
	  - Netelligent 100 FDDI SAS UTP
	  - Netelligent 100 FDDI SAS Fibre MIC

	  Read <file:Documentation/networking/device_drivers/fddi/skfp.rst>
	  for information about the driver.

	  Questions concerning this driver can be addressed to:
	  <linux@syskonnect.de>

	  To compile this driver as a module, choose M here: the module
	  will be called skfp.  This is recommended.

endif # FDDI

```
