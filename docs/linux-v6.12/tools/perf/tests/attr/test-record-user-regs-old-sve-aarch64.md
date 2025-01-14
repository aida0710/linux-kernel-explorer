---
sidebar_position: 38
---
# test-record-user-regs-old-sve-aarch64

### ファイル情報

- パス: `linux-v6.12/tools/perf/tests/attr/test-record-user-regs-old-sve-aarch64`

### コンテンツ

```txt
# Test that asking for VG always fails on old kernels because it was
# added in 6.1. This applies to systems that either support or don't
# support SVE.
[config]
command = record
args    = --no-bpf-event --user-regs=vg kill >/dev/null 2>&1
ret     = 129
test_ret = true
arch    = aarch64
kernel_until = 6.1

```
