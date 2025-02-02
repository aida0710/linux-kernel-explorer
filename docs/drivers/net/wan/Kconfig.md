---
sidebar_position: 20
---
# Kconfig

### ファイル情報

- パス: `drivers/net/wan/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# wan devices configuration
#

menuconfig WAN
	bool "Wan interfaces support"
	help
	  Wide Area Networks (WANs), such as X.25, Frame Relay and leased
	  lines, are used to interconnect Local Area Networks (LANs) over vast
	  distances with data transfer rates significantly higher than those
	  achievable with commonly used asynchronous modem connections.

	  Usually, a quite expensive external device called a `WAN router' is
	  needed to connect to a WAN. As an alternative, a relatively
	  inexpensive WAN interface card can allow your Linux box to directly
	  connect to a WAN.

	  If you have one of those cards and wish to use it under Linux,
	  say Y here and also to the WAN driver for your card.

	  If unsure, say N.

if WAN

# Generic HDLC
config HDLC
	tristate "Generic HDLC layer"
	help
	  Say Y to this option if your Linux box contains a WAN (Wide Area
	  Network) card supported by this driver and you are planning to
	  connect the box to a WAN.

	  You will need supporting software from
	  <http://www.kernel.org/pub/linux/utils/net/hdlc/>.
	  Generic HDLC driver currently supports raw HDLC, Cisco HDLC, Frame
	  Relay, synchronous Point-to-Point Protocol (PPP) and X.25.

	  To compile this driver as a module, choose M here: the
	  module will be called hdlc.

	  If unsure, say N.

config HDLC_RAW
	tristate "Raw HDLC support"
	depends on HDLC
	help
	  Generic HDLC driver supporting raw HDLC over WAN connections.

	  If unsure, say N.

config HDLC_RAW_ETH
	tristate "Raw HDLC Ethernet device support"
	depends on HDLC
	help
	  Generic HDLC driver supporting raw HDLC Ethernet device emulation
	  over WAN connections.

	  You will need it for Ethernet over HDLC bridges.

	  If unsure, say N.

config HDLC_CISCO
	tristate "Cisco HDLC support"
	depends on HDLC
	help
	  Generic HDLC driver supporting Cisco HDLC over WAN connections.

	  If unsure, say N.

config HDLC_FR
	tristate "Frame Relay support"
	depends on HDLC
	help
	  Generic HDLC driver supporting Frame Relay over WAN connections.

	  If unsure, say N.

config HDLC_PPP
	tristate "Synchronous Point-to-Point Protocol (PPP) support"
	depends on HDLC
	help
	  Generic HDLC driver supporting PPP over WAN connections.

	  If unsure, say N.

config HDLC_X25
	tristate "X.25 protocol support"
	depends on HDLC && (LAPB=m && HDLC=m || LAPB=y)
	help
	  Generic HDLC driver supporting X.25 over WAN connections.

	  If unsure, say N.

comment "X.25/LAPB support is disabled"
	depends on HDLC && (LAPB!=m || HDLC!=m) && LAPB!=y

source "drivers/net/wan/framer/Kconfig"

config PCI200SYN
	tristate "Goramo PCI200SYN support"
	depends on HDLC && PCI
	help
	  Driver for PCI200SYN cards by Goramo sp. j.

	  If you have such a card, say Y here and see
	  <http://www.kernel.org/pub/linux/utils/net/hdlc/>.

	  To compile this as a module, choose M here: the
	  module will be called pci200syn.

	  If unsure, say N.

config WANXL
	tristate "SBE Inc. wanXL support"
	depends on HDLC && PCI
	help
	  Driver for wanXL PCI cards by SBE Inc.

	  If you have such a card, say Y here and see
	  <http://www.kernel.org/pub/linux/utils/net/hdlc/>.

	  To compile this as a module, choose M here: the
	  module will be called wanxl.

	  If unsure, say N.

config WANXL_BUILD_FIRMWARE
	bool "rebuild wanXL firmware"
	depends on WANXL && !PREVENT_FIRMWARE_BUILD
	help
	  Allows you to rebuild firmware run by the QUICC processor.
	  It requires m68k toolchains and hexdump programs.

	  You should never need this option, say N.

config PC300TOO
	tristate "Cyclades PC300 RSV/X21 alternative support"
	depends on HDLC && PCI
	help
	  Alternative driver for PC300 RSV/X21 PCI cards made by
	  Cyclades, Inc. If you have such a card, say Y here and see
	  <http://www.kernel.org/pub/linux/utils/net/hdlc/>.

	  To compile this as a module, choose M here: the module
	  will be called pc300too.

	  If unsure, say N here.

config N2
	tristate "SDL RISCom/N2 support"
	depends on HDLC && ISA
	help
	  Driver for RISCom/N2 single or dual channel ISA cards by
	  SDL Communications Inc.

	  If you have such a card, say Y here and see
	  <http://www.kernel.org/pub/linux/utils/net/hdlc/>.

	  Note that N2csu and N2dds cards are not supported by this driver.

	  To compile this driver as a module, choose M here: the module
	  will be called n2.

	  If unsure, say N.

config C101
	tristate "Moxa C101 support"
	depends on HDLC && ISA
	help
	  Driver for C101 SuperSync ISA cards by Moxa Technologies Co., Ltd.

	  If you have such a card, say Y here and see
	  <http://www.kernel.org/pub/linux/utils/net/hdlc/>.

	  To compile this driver as a module, choose M here: the
	  module will be called c101.

	  If unsure, say N.

config FARSYNC
	tristate "FarSync T-Series support"
	depends on HDLC && PCI && HAS_IOPORT
	help
	  Support for the FarSync T-Series X.21 (and V.35/V.24) cards by
	  FarSite Communications Ltd.

	  Synchronous communication is supported on all ports at speeds up to
	  8Mb/s (128K on V.24) using synchronous PPP, Cisco HDLC, raw HDLC,
	  Frame Relay or X.25/LAPB.

	  If you want the module to be automatically loaded when the interface
	  is referenced then you should add "alias hdlcX farsync" to a file
	  in /etc/modprobe.d/ for each interface, where X is 0, 1, 2, ..., or
	  simply use "alias hdlc* farsync" to indicate all of them.

	  To compile this driver as a module, choose M here: the
	  module will be called farsync.

config FSL_QMC_HDLC
	tristate "Freescale QMC HDLC support"
	depends on HDLC
	depends on CPM_QMC
	help
	  HDLC support using the Freescale QUICC Multichannel Controller (QMC).

	  To compile this driver as a module, choose M here: the
	  module will be called fsl_qmc_hdlc.

	  If unsure, say N.

config FSL_UCC_HDLC
	tristate "Freescale QUICC Engine HDLC support"
	depends on HDLC
	depends on QUICC_ENGINE
	help
	  Driver for Freescale QUICC Engine HDLC controller. The driver
	  supports HDLC in NMSI and TDM mode.

	  To compile this driver as a module, choose M here: the
	  module will be called fsl_ucc_hdlc.

config SLIC_DS26522
	tristate "Slic Maxim ds26522 card support"
	depends on SPI
	depends on FSL_SOC || ARCH_MXC || ARCH_LAYERSCAPE || COMPILE_TEST
	select BITREVERSE
	help
	  This module initializes and configures the slic maxim card
	  in T1 or E1 mode.

	  To compile this driver as a module, choose M here: the
	  module will be called slic_ds26522.

config IXP4XX_HSS
	tristate "Intel IXP4xx HSS (synchronous serial port) support"
	depends on HDLC && IXP4XX_NPE && IXP4XX_QMGR
	depends on ARCH_IXP4XX && OF
	select MFD_SYSCON
	help
	  Say Y here if you want to use built-in HSS ports
	  on IXP4xx processor.

# X.25 network drivers
config LAPBETHER
	tristate "LAPB over Ethernet driver"
	depends on LAPB && X25
	help
	  Driver for a pseudo device (typically called /dev/lapb0) which allows
	  you to open an LAPB point-to-point connection to some other computer
	  on your Ethernet network.

	  In order to do this, you need to say Y or M to the driver for your
	  Ethernet card as well as to "LAPB Data Link Driver".

	  To compile this driver as a module, choose M here: the
	  module will be called lapbether.


	  If unsure, say N.

endif # WAN

```
