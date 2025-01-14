---
sidebar_position: 15
---
# or

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/kerneldoc/or`

### コンテンツ

```txt
cat <<EOF
/**
 * ${class}${atomicname}() - atomic bitwise OR with ${desc_order} ordering
 * @i: ${int} value
 * @v: pointer to ${atomic}_t
 *
 * Atomically updates @v to (@v | @i) with ${desc_order} ordering.
 *
 * ${desc_noinstr}
 *
 * ${desc_return}
 */
EOF

```
