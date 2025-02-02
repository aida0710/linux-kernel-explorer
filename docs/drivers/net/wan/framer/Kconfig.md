---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wan/framer/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# FRAMER
#

menuconfig FRAMER
	tristate "Framer Subsystem"
	help
	  A framer is a component in charge of an E1/T1 line interface.
	  Connected usually to a TDM bus, it converts TDM frames to/from E1/T1
	  frames. It also provides information related to the E1/T1 line.
	  Used with HDLC, the network can be reached through the E1/T1 line.

	  This framework is designed to provide a generic interface for framer
	  devices present in the kernel. This layer will have the generic
	  API by which framer drivers can create framer using the framer
	  framework and framer users can obtain reference to the framer.
	  All the users of this framework should select this config.

if FRAMER

config GENERIC_FRAMER
	bool

config FRAMER_PEF2256
	tristate "Lantiq PEF2256"
	depends on OF
	depends on HAS_IOMEM
	select GENERIC_FRAMER
	select MFD_CORE
	select REGMAP_MMIO
	help
	  Enable support for the Lantiq PEF2256 (FALC56) framer.
	  The PEF2256 is a framer and line interface between analog E1/T1/J1
	  line and a digital PCM bus.

	  If unsure, say N.

	  To compile this driver as a module, choose M here: the
	  module will be called framer-pef2256.

endif # FRAMER

```
