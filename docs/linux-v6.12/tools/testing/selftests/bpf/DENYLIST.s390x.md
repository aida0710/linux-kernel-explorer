---
sidebar_position: 32
---
# DENYLIST.s390x

### ファイル情報

- パス: `linux-v6.12/tools/testing/selftests/bpf/DENYLIST.s390x`

### コンテンツ

```s390x
# TEMPORARY
# Alphabetical order
get_stack_raw_tp                         # user_stack corrupted user stack                                             (no backchain userspace)
stacktrace_build_id                      # compare_map_keys stackid_hmap vs. stackmap err -2 errno 2                   (?)
verifier_iterating_callbacks

```
