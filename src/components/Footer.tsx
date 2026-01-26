export function Footer() {
  return (
    <footer className="border-t border-border/30 py-8 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AUTO RPA. All rights reserved.
          </p>
          <p className="text-sm text-silver-dim">
            Design by <span className="text-silver">홍길동</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
