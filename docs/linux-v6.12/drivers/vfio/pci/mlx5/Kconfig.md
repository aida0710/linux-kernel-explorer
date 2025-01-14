---
sidebar_position: 3
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/vfio/pci/mlx5/Kconfig`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0-only
config MLX5_VFIO_PCI
	tristate "VFIO support for MLX5 PCI devices"
	depends on MLX5_CORE
	select VFIO_PCI_CORE
	select IOMMUFD_DRIVER
	help
	  This provides migration support for MLX5 devices using the VFIO
	  framework.

	  If you don't know what to do here, say N.

```
