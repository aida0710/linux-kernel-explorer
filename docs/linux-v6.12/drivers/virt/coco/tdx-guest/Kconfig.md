---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/virt/coco/tdx-guest/Kconfig`

### コンテンツ

```txt
config TDX_GUEST_DRIVER
	tristate "TDX Guest driver"
	depends on INTEL_TDX_GUEST
	select TSM_REPORTS
	help
	  The driver provides userspace interface to communicate with
	  the TDX module to request the TDX guest details like attestation
	  report.

	  To compile this driver as module, choose M here. The module will
	  be called tdx-guest.

```
