---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/accel/qaic/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
#
# Qualcomm Cloud AI accelerators driver
#

config DRM_ACCEL_QAIC
	tristate "Qualcomm Cloud AI accelerators"
	depends on DRM_ACCEL
	depends on PCI && HAS_IOMEM
	depends on MHI_BUS
	depends on MMU
	select CRC32
	help
	  Enables driver for Qualcomm's Cloud AI accelerator PCIe cards that are
	  designed to accelerate Deep Learning inference workloads.

	  The driver manages the PCIe devices and provides an IOCTL interface
	  for users to submit workloads to the devices.

	  If unsure, say N.

	  To compile this driver as a module, choose M here: the
	  module will be called qaic.

```
