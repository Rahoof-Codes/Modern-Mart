import { MapPin, Phone, Mail, ShieldCheck, Truck, RotateCcw, CreditCard } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-8 pb-20 md:pb-0">
      {/* Trust strip */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, title: 'Free Delivery', desc: 'On orders above ₹199' },
            { icon: RotateCcw, title: 'Easy Returns', desc: '7-day return policy' },
            { icon: ShieldCheck, title: '100% Genuine', desc: 'Quality assured products' },
            { icon: CreditCard, title: 'Secure Payment', desc: 'UPI, Cards, COD' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-bg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm text-text-dark">{title}</p>
                <p className="text-xs text-text-gray mt-0.5">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-display font-bold text-xs">M</span>
              </div>
              <span className="font-display font-bold text-lg text-text-dark">
                Modern<span className="text-primary">Mart</span>
              </span>
            </div>
            <p className="text-text-gray text-sm leading-relaxed mb-4">
              India's #1 online shopping destination. Best deals on footwear, fashion, gifts, and more.
            </p>
            <div className="space-y-2">
              <a href="#" className="flex items-center gap-2 text-sm text-text-gray hover:text-primary transition-colors">
                <Phone className="w-3.5 h-3.5" /> 1800-XXX-XXXX
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-text-gray hover:text-primary transition-colors">
                <Mail className="w-3.5 h-3.5" /> support@modernmart.in
              </a>
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Shop',
              links: ['Footwear', 'Fashion', 'Gifts', 'Home Decor', 'Electronics'],
            },
            {
              title: 'Help',
              links: ['Track Order', 'Returns', 'Cancellation', 'FAQ', 'Contact Us'],
            },
            {
              title: 'Company',
              links: ['About Us', 'Careers', 'Blog', 'Sell on Modern Mart', 'Press'],
            },
          ].map((section) => (
            <div key={section.title}>
              <h4 className="font-display font-bold text-sm text-text-dark mb-3">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-text-gray hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Payment methods */}
        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-text-light text-center mb-3">We Accept</p>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            {['UPI', 'Visa', 'Mastercard', 'RuPay', 'Paytm', 'PhonePe', 'COD'].map(
              (method) => (
                <span
                  key={method}
                  className="px-3 py-1.5 rounded-lg bg-bg text-xs font-medium text-text-gray border border-border"
                >
                  {method}
                </span>
              )
            )}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-text-light text-xs">
            © 2026 Modern Mart. All rights reserved. Made with ❤️ in India.
          </p>
        </div>
      </div>
    </footer>
  )
}
