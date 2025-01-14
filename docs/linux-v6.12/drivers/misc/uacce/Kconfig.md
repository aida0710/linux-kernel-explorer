---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/misc/uacce/Kconfig`

### コンテンツ

```txt
config UACCE
	tristate "Accelerator Framework for User Land"
	depends on IOMMU_API
	help
	  UACCE provides interface for the user process to access the hardware
	  without interaction with the kernel space in data path.

	  The user-space interface is described in
	  include/uapi/misc/uacce/uacce.h

	  See Documentation/misc-devices/uacce.rst for more details.

	  If you don't know what to do here, say N.

```
