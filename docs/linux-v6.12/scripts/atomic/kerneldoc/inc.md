---
sidebar_position: 11
---
# inc

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/inc`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic increment with ${desc_order} ordering
 * @v: pointer to ${atomic}_t
 *
 * Atomically updates @v to (@v + 1) with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * ${desc_return}
 */
EOF

```
