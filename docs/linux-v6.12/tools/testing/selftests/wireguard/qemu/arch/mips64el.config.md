---
sidebar_position: 9
---
# mips64el.config

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/wireguard/qemu/arch/mips64el.config`

### コンテンツ

```config
CONFIG_64BIT=y
CONFIG_CPU_MIPS64_R2=y
CONFIG_MIPS32_N32=y
CONFIG_CPU_HAS_MSA=y
CONFIG_MIPS_MALTA=y
CONFIG_CPU_LITTLE_ENDIAN=y
CONFIG_MIPS_CPS=y
CONFIG_MIPS_FP_SUPPORT=y
CONFIG_POWER_RESET=y
CONFIG_POWER_RESET_SYSCON=y
CONFIG_SERIAL_8250=y
CONFIG_SERIAL_8250_CONSOLE=y
CONFIG_CMDLINE_BOOL=y
CONFIG_CMDLINE="console=ttyS0 wg.success=ttyS1 panic_on_warn=1"
CONFIG_FRAME_WARN=1280

```
