---
sidebar_position: 2
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/virt/coco/pkvm-guest/Kconfig`

### コンテンツ

```txt
config ARM_PKVM_GUEST
	bool "Arm pKVM protected guest driver"
	depends on ARM64
	help
	  Protected guests running under the pKVM hypervisor on arm64
	  are isolated from the host and must issue hypercalls to enable
	  interaction with virtual devices. This driver implements
	  support for probing and issuing these hypercalls.

	  If unsure, say 'N'.

```
