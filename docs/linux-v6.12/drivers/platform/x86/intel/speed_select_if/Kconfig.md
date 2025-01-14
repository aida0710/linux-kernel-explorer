---
sidebar_position: 9
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/platform/x86/intel/speed_select_if/Kconfig`

### コンテンツ

```txt
menu "Intel Speed Select Technology interface support"
	depends on PCI
	depends on X86_64 || COMPILE_TEST

config INTEL_SPEED_SELECT_TPMI
	tristate

config INTEL_SPEED_SELECT_INTERFACE
	tristate "Intel(R) Speed Select Technology interface drivers"
	select INTEL_SPEED_SELECT_TPMI if INTEL_TPMI
	help
	  This config enables the Intel(R) Speed Select Technology interface
	  drivers. The Intel(R) speed select technology features are non
	  architectural and only supported on specific Xeon(R) servers.
	  These drivers provide interface to directly communicate with hardware
	  via MMIO and Mail boxes to enumerate and control all the speed select
	  features.

	  Enable this config, if there is a need to enable and control the
	  Intel(R) Speed Select Technology features from the user space.
endmenu

```
