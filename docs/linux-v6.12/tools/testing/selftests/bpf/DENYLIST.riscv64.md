---
sidebar_position: 31
---
# DENYLIST.riscv64

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/DENYLIST.riscv64`

### コンテンツ

```riscv64
# riscv64 deny list for BPF CI and local vmtest
exceptions					# JIT does not support exceptions
tailcalls/tailcall_bpf2bpf*			# JIT does not support mixing bpf2bpf and tailcalls

```
