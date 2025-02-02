---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/can/softing/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CAN_SOFTING
	tristate "Softing Gmbh CAN generic support"
	depends on HAS_IOMEM
	help
	  Support for CAN cards from Softing Gmbh & some cards
	  from Vector Gmbh.
	  Softing Gmbh CAN cards come with 1 or 2 physical buses.
	  Those cards typically use Dual Port RAM to communicate
	  with the host CPU. The interface is then identical for PCI
	  and PCMCIA cards. This driver operates on a platform device,
	  which has been created by softing_cs or softing_pci driver.
	  Warning:
	  The API of the card does not allow fine control per bus, but
	  controls the 2 buses on the card together.
	  As such, some actions (start/stop/busoff recovery) on 1 bus
	  must bring down the other bus too temporarily.

config CAN_SOFTING_CS
	tristate "Softing Gmbh CAN pcmcia cards"
	depends on PCMCIA
	depends on CAN_SOFTING
	help
	  Support for PCMCIA cards from Softing Gmbh & some cards
	  from Vector Gmbh.
	  You need firmware for these, which you can get at
	  https://github.com/linux-can/can-firmware
	  This version of the driver is written against
	  firmware version 4.6 (softing-fw-4.6-binaries.tar.gz)
	  In order to use the card as CAN device, you need the Softing generic
	  support too.

```
