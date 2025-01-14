---
sidebar_position: 20
---
# hardening.config

### ファイル情報

- パス: `linux-v6.12/arch/arm/configs/hardening.config`

### コンテンツ

```config
# Basic kernel hardening options (specific to arm)

# Make sure PXN/PAN emulation is enabled.
CONFIG_CPU_SW_DOMAIN_PAN=y

# Dangerous; old interfaces and needless additional attack surface.
# CONFIG_OABI_COMPAT is not set

```
