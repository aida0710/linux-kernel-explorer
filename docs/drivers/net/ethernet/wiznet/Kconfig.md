---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/ethernet/wiznet/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# WIZnet devices configuration
#

config NET_VENDOR_WIZNET
	bool "WIZnet devices"
	depends on HAS_IOMEM
	default y
	help
	  If you have a network (Ethernet) card belonging to this class, say Y.

	  Note that the answer to this question doesn't directly affect the
	  kernel: saying N will just cause the configurator to skip all
	  the questions about WIZnet devices. If you say Y, you will be asked
	  for your specific card in the following questions.

if NET_VENDOR_WIZNET

config WIZNET_W5100
	tristate "WIZnet W5100 Ethernet support"
	depends on HAS_IOMEM
	help
	  Support for WIZnet W5100 chips.

	  W5100 is a single chip with integrated 10/100 Ethernet MAC,
	  PHY and hardware TCP/IP stack, but this driver is limited to
	  the MAC and PHY functions only, onchip TCP/IP is unused.

	  To compile this driver as a module, choose M here: the module
	  will be called w5100.

config WIZNET_W5300
	tristate "WIZnet W5300 Ethernet support"
	depends on HAS_IOMEM
	help
	  Support for WIZnet W5300 chips.

	  W5300 is a single chip with integrated 10/100 Ethernet MAC,
	  PHY and hardware TCP/IP stack, but this driver is limited to
	  the MAC and PHY functions only, onchip TCP/IP is unused.

	  To compile this driver as a module, choose M here: the module
	  will be called w5300.

choice
	prompt "WIZnet interface mode"
	depends on WIZNET_W5100 || WIZNET_W5300
	default WIZNET_BUS_ANY

config WIZNET_BUS_DIRECT
	bool "Direct address bus mode"
	help
	  In direct address mode host system can directly access all registers
	  after mapping to Memory-Mapped I/O space.

config WIZNET_BUS_INDIRECT
	bool "Indirect address bus mode"
	help
	  In indirect address mode host system indirectly accesses registers
	  using Indirect Mode Address Register and Indirect Mode Data Register,
	  which are directly mapped to Memory-Mapped I/O space.

config WIZNET_BUS_ANY
	bool "Select interface mode in runtime"
	help
	  If interface mode is unknown in compile time, it can be selected
	  in runtime from board/platform resources configuration.

	  Performance may decrease compared to explicitly selected bus mode.
endchoice

config WIZNET_W5100_SPI
	tristate "WIZnet W5100/W5200/W5500 Ethernet support for SPI mode"
	depends on WIZNET_BUS_ANY && WIZNET_W5100
	depends on SPI
	help
	  In SPI mode host system accesses registers using SPI protocol
	  (mode 0) on the SPI bus.

	  Performance decreases compared to other bus interface mode.
	  In W5100 SPI mode, burst READ/WRITE processing are not provided.

	  To compile this driver as a module, choose M here: the module
	  will be called w5100-spi.

endif # NET_VENDOR_WIZNET

```
