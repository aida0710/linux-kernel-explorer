---
sidebar_position: 28
---
# hardening.config

### ファイル情報

- パス: `linux-v6.12/arch/powerpc/configs/hardening.config`

### コンテンツ

```config
# PowerPC specific hardening options

# Block kernel from unexpectedly reading userspace memory.
CONFIG_PPC_KUAP=y

# Attack surface reduction.
# CONFIG_SCOM_DEBUGFS is not set

# Disable internal kernel debugger.
# CONFIG_XMON is not set

```
