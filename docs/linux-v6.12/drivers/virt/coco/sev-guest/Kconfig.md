---
sidebar_position: 1
---
# Kconfig

### ファイル情報

- パス: `linux-v6.12/drivers/virt/coco/sev-guest/Kconfig`

### コンテンツ

```txt
config SEV_GUEST
	tristate "AMD SEV Guest driver"
	default m
	depends on AMD_MEM_ENCRYPT
	select CRYPTO
	select CRYPTO_AEAD2
	select CRYPTO_GCM
	select TSM_REPORTS
	help
	  SEV-SNP firmware provides the guest a mechanism to communicate with
	  the PSP without risk from a malicious hypervisor who wishes to read,
	  alter, drop or replay the messages sent. The driver provides
	  userspace interface to communicate with the PSP to request the
	  attestation report and more.

	  If you choose 'M' here, this module will be called sev-guest.

```
