---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `drivers/net/can/peak_canfd/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config CAN_PEAK_PCIEFD
	depends on PCI
	tristate "PEAK-System PCAN-PCIe FD cards"
	help
	  This driver adds support for the PEAK-System PCI Express FD
	  CAN-FD cards family.
	  These 1x or 2x CAN-FD channels cards offer CAN 2.0 a/b as well as
	  CAN-FD access to the CAN bus. Besides the nominal bitrate of up to
	  1 Mbit/s, the data bytes of CAN-FD frames can be transmitted with
	  up to 12 Mbit/s. A galvanic isolation of the CAN ports protects the
	  electronics of the card and the respective computer against
	  disturbances of up to 500 Volts. The PCAN-PCI Express FD can be
	  operated with ambient temperatures in a range of -40 to +85 °C.

```
